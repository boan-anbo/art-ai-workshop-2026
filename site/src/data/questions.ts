import type { MarkdownInstance } from 'astro';
import { topics, type TopicId } from './topics';
interface QuestionMetadata {
  id: string;
  title: string;
  question_zh: string;
  topics: TopicId[];
}
export const questions = Object.values(import.meta.glob<MarkdownInstance<QuestionMetadata>>(
  '../content/qa/*.md', { eager: true },
)).sort((a, b) => a.frontmatter.id.localeCompare(b.frontmatter.id, 'en', { numeric: true }));
const questionIds = questions.map(({ frontmatter }) => frontmatter.id);
if (new Set(questionIds).size !== questionIds.length) {
  throw new Error('Each question response must have a distinct id.');
}
for (const { frontmatter } of questions) {
  if (!/^\d{2}\.\d$/.test(frontmatter.id) || !frontmatter.title || !frontmatter.question_zh || !frontmatter.topics?.length
    || frontmatter.topics.some((id) => !topics.some((topic) => topic.id === id))) {
    throw new Error(`Invalid question metadata: ${frontmatter.id}`);
  }
}
export const anchor = (id: string) => `q-${id.replace('.', '-')}`;
export const groups: { key: string; items: typeof questions }[] = [];
for (const question of questions) {
  const key = question.frontmatter.id.slice(0, 2);
  const last = groups.at(-1);
  if (last?.key === key) last.items.push(question);
  else groups.push({ key, items: [question] });
}
