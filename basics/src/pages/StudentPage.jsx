import Student from "./Student";

export default function StudentPage() {
    return (
        <>
            <Student name="John" age={20} isStudent={true} />
            <Student name="Jane" age={21} isStudent={false} />
            <Student name="Jack" age={22} isStudent={true} />
            <Student />
        </>
    );
}