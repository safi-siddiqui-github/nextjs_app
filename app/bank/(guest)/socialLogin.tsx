export default function SocialLogin() {
    return (
        <div className="flex flex-col gap-2">
            <button className="text-sm text-center py-2 bg-black/75 hover:bg-black/60 text-white rounded font-medium">Continue with Github</button>
            <button className="text-sm text-center py-2 bg-blue-500 hover:bg-blue-500/90 text-white rounded font-medium">Continue with Google</button>
        </div>
    )
}