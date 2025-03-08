

function page() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-2 gap-4">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-10">
                        <h2 className="text-lg font-bold">Card {index + 1}</h2>
                        <p className="mt-2">This is a description for card {index + 1}.</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page