import { defineStore } from "pinia";
import { Ref, ref } from "vue";

interface Quiz {
    topic: string;
    questions: Question[];
}

interface Question {
    id: number;
    question: string;
    answer: string;
    options: string[];
}

export const useQuizStore = defineStore("quizes", () => {
    const data: Ref<Quiz[]> = ref([]);
    let quiz: Ref<number> = ref(0);
    const loading = ref(true);
    const correctAnswers = ref(0);

    async function getData() {
        let response: Response = await fetch("/data.json");
        if (!response.ok) {
            loading.value = false;
            throw new Error("Failed to fetch data");
        }
        return response.json();
    }

    function setQuiz(n: number) {
        quiz.value = 0;
        quiz.value += n;
    }

    function updateCorrectAnswers() {
        correctAnswers.value++;
    }

    return {
        data,
        loading,
        quiz,
        correctAnswers,
        getData,
        setQuiz,
        updateCorrectAnswers,
    };
});
