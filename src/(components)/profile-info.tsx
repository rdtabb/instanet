import { fetchUserDataset } from '@/models/methods'

export const ProfileInfo = async ({ uid }: { uid: string }) => {
    const { name, newStatus, imgurl } = await fetchUserDataset(uid)

    return (
        <section className="flex items-center gap-8 my-8">
            <img
                src={imgurl}
                alt={name}
                width={120}
                height={120}
                className="block h-[120px] w-[120px] object-cover rounded-full"
            />
            <div className="grid gap-4">
                <h1 className="font-semibold text-5xl leading-10 whitespace-nowrap">{name}</h1>
                <p>{newStatus}</p>
            </div>
        </section>
    )
}
