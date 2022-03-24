const Loading = () => (
    <div className="relative w-full h-60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="border-4 ring-1 px-5 py-5 rounded-full border-blue-500 animate-spin animate-ping"></div>
        </div>
    </div>
);

export default Loading;
