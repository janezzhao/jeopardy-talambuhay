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
            'What is the biggest tennis stadium in the world?',
        answer: 'Arthur Ashe Stadium',
    },
    {
        points: 300,
        question: 'What day was Lunar New Year in 2011?',
        imgSrc: "/day.png",
        answer: 'February 3',
    },
    {
        points: 400,
        question: 'What is this cartoon\'s name?',
        imgSrc: '/cartoon.jpg',
        answer: 'Boonie Bears',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question: 
            'What book are the Trisolarans from?',
            answer: 'Three Body Problem',
        },
        {
            points: 100,
            question: 'Which country has the second-highest GDP in the world?',
            answer: 'China',
        },
        {
            points: 200,
            question: 'Which instrument is both a string and percussion instrument?',
            answer: 'Piano',
        },
        {
            points: 300,
            question: 'What programming language is this code?',
            imgSrc: "/programming_language.png",
            answer: 'C++',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What city is the tallest building in the world in?',
        answer: 'Dubai',
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