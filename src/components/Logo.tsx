export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <div className={`relative ${className} bg-[#2C2423] rounded-lg flex items-center justify-center overflow-hidden shadow-lg`}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[80%] h-[80%]"
            >
                {/* Stylized 'B' with 'S' integrated */}
                <path
                    d="M25 20V80H55C65 80 75 75 75 65C75 58 70 52 65 50C70 48 75 42 75 35C75 25 65 20 55 20H25Z"
                    stroke="#F39200"
                    strokeWidth="8"
                    strokeLinejoin="round"
                />
                <path
                    d="M25 50H55"
                    stroke="#F39200"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <path
                    d="M55 20C65 20 75 25 75 35C75 42 70 48 65 50C70 52 75 58 75 65C75 75 65 80 55 80"
                    stroke="#F39200"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <path
                    d="M60 30C50 30 40 35 40 40C40 45 60 45 60 50C60 55 50 60 40 60"
                    stroke="#F39200"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="opacity-80"
                />
            </svg>
        </div>
    );
}
