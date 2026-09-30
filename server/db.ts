import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What city is the financial capital of the world?',
        answer: 'New York City', //I was born here
    },
    {
        points: 200,
        question:
            'What is the biggest tennis stadium in the world?',
        answer: 'Arthur Ashe Stadium', //I've been to here 4 times
    },
    {
        points: 300,
        question: 'What day was Lunar New Year in 2011?',
        imgSrc: "/day.png",
        answer: 'February 3', //I was born on this day
    },
    {
        points: 400,
        question: 'What is this cartoon\'s name?',
        imgSrc: '/cartoon.jpg',
        answer: 'Boonie Bears', //This was my favorite childhood cartoon
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question: 
            'What book is the character Luo Ji from?',
            answer: 'The Dark Forest', //My favorite book
        },
        {
            points: 100,
            question: 'Which country has the second-highest GDP in the world?',
            answer: 'China', //The country I'm from
        },
        {
            points: 200,
            question: 'Which instrument is both a string and percussion instrument?',
            answer: 'Piano', //The instrument I play
        },
        {
            points: 300,
            question: 'What programming language is this code?',
            imgSrc: "/programming_language.png",
            answer: 'C++', //The other programming language I know
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What city is the tallest building in the world in?',
        answer: 'Dubai', //We will definitely go here sometime
    }
]);


const categories = [
    {
        title: 'Jane\'s Past',
        questions: pastQuestions
    },
    {
        title: `Jane\'s Present`,
        questions: presentQuestions
    },
    {
        title: "Jane\'s Future",
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