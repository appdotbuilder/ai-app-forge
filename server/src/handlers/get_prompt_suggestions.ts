import { type PromptSuggestion } from '../schema';

export async function getPromptSuggestions(): Promise<PromptSuggestion[]> {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching active prompt suggestions from the database
    // to display as clickable pills on the landing page.
    return Promise.resolve([
        {
            id: 1,
            text: "Build a todo app with React",
            category: "productivity",
            is_active: true,
            created_at: new Date()
        },
        {
            id: 2,
            text: "Create a blog with authentication",
            category: "content",
            is_active: true,
            created_at: new Date()
        },
        {
            id: 3,
            text: "Design a landing page",
            category: "marketing",
            is_active: true,
            created_at: new Date()
        }
    ] as PromptSuggestion[]);
}