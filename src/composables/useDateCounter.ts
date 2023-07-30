export function useDateCounter(targetDate: Date) {
    const formatWithLeadingZero = (num: number) => {
        return num < 10 ? '0' + num : num.toString();
    }
    const getRemainingTime = (targetDate: Date) => {
        const currentDate = new Date();
        const timeDifference = targetDate.getTime() - currentDate.getTime();
        const remaining = timeDifference > 0 ? timeDifference : 0;

        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = formatWithLeadingZero(Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = formatWithLeadingZero(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = formatWithLeadingZero(Math.floor((remaining % (1000 * 60)) / 1000));

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }

    const remainingTime = ref(getRemainingTime(targetDate));
    let interval: NodeJS.Timeout;

    const calculateRemainingTime = () => {
        remainingTime.value = getRemainingTime(targetDate);
    }

    onMounted(() => {
        calculateRemainingTime();
        // Update the remaining time every second (1000 milliseconds)
        interval = setInterval(calculateRemainingTime, 1000);
    });

    onBeforeUnmount(() => {
        // Clear the interval when the component is unmounted to avoid memory leaks
        clearInterval(interval);
    });

    return {
        remainingTime: computed(() => remainingTime.value),
    };
}
