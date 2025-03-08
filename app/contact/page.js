

function page() {
    return (
        <div>
            <div className="banner bg-blue-500 text-white text-center py-4 sm:py-8 w-full">
                <div className="p-10 ">
                    <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
                    <p className="mt-2 text-gray-600">We would love to hear from you! Please reach out with any questions or feedback.</p>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Email:</h3>
                        <p className="text-gray-600"><a href="mailto:info@example.com" className="text-black-500 hover:underline">info@example.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page