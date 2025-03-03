interface Props {
    value: number;
    max_value: number;
    theme?: string;
}

const ProgressBar = ({ value, max_value, theme }: Props) => {
    const percentage = 100 - ((value / max_value) * 100);

    return (
        <div className="h-[2.4rem] md:h-[3.2rem] w-full rounded-[.4rem] p-[.4rem] bg-beige-100 flex">
            <div
                className="rounded-[.4rem]"
                style={{
                    backgroundColor: theme || "#000",
                    width: `${percentage}%`
                }}
            ></div>
        </div>
    );
};

export default ProgressBar;
