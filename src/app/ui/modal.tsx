export default function Modal({
    isOpen, onClose
}: {
    isOpen: boolean,
    onClose: {}
}) {
    console.log("Is modal open?: " + isOpen.toString());
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
                <h2>Title</h2>
            </div>
        </div>
    )
}