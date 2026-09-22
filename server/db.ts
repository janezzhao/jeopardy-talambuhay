import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What city is the financial capital of the world?',
        answer: 'New York City',
    },
    {
        points: 200,
        question:
            'Which country\'s flag is this?',
        imgSrc: "https://cdn.britannica.com/34/4034-050-91EE1BCF/Flag-Myanmar.jpg",
        answer: 'Myanmar',
    },
    {
        points: 300,
        question: 'What is this cartoon\'s name?',
        imgSrc: "cartoon.jpg",
        answer: '熊出没',
    },
    {
        points: 400,
        question: 'Who wrote the Critique of Pure Reason?',
        answer: 'Immanuel Kant',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'This is Donu, a character from which video game?',
            imgSrc: '/donu-gif.gif',
            answer: 'Slay the Spire',
        },
        {
            points: 100,
            question: 'Which country has the second-highest GDP in the world?',
            answer: 'China',
        },
        {
            points: 200,
            question: 'What programming language is this code?',
            imgSrc: "/programming_language.png",
            answer: 'C++',
        },
        {
            points: 300,
            question:
                '',
            imgSrc:
                "",
            answer: '',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            '',
        imgSrc:
            "",
        answer: '',
    }
]);


const categories = [
    {
        title: 'Past',
        questions: pastQuestions
    },
    {
        title: `Present`,
        questions: presentQuestions
    },
    {
        title: "Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}