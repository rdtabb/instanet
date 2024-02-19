import Link from 'next/link'

import { fetchUserlist } from '@/models/methods'

export const Userlist = async () => {
    const userlist = await fetchUserlist()

    return (
        <ul>
            {userlist?.map((user) => (
                <li key={user.name} className="flex justify-between">
                    <img src={user.imgurl} alt={user.name} width={88} height={88} />
                    <p>{user.name}</p>
                    <Link href={`/user/${user.id}`}>Go to user profile</Link>
                </li>
            ))}
        </ul>
    )
}
