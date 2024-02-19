import { fetchUserinfo } from '@/models/methods'

export const ProfileInfo = async ({ uid }: { uid: string }) => {
    const userinfo = await fetchUserinfo(uid)

    return (
        <section className="flex items-center gap-8 my-8">
            <img
                src={userinfo?.imgurl}
                alt={userinfo?.name}
                width={120}
                height={120}
                className="block h-[120px] w-[120px] object-cover rounded-full"
            />
            <div className="grid gap-4">
                <h1 className="font-semibold text-5xl leading-10 whitespace-nowrap">
                    {userinfo?.name}
                </h1>
                <p>{userinfo?.newStatus}</p>
            </div>
        </section>
    )
}
