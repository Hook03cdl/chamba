"use client";

import {Button} from "@/components/ui/button";
import {followUser} from "@/lib/actions/user";
import {unfollowUser} from "@/lib/actions/profile";
import {useState} from "react";

export default function ButtonFollow({followedId, followed}: { followedId: string, followed: string }) {

    const [isFollowed, setIsFollowed] = useState(followed === "true");

    const handleFollow = async () => {
        if (followedId) {
            await followUser(followedId);
            setIsFollowed(true);
        }
    }

    const handleUnfollow = async () => {
        if (followedId) {
            await unfollowUser(followedId);
            setIsFollowed(false);
        }
    }

    return (
        <div>
            {
                isFollowed ? (
                    <Button size={'sm'} variant={'outline'} onClick={handleUnfollow}>Dejar de seguir</Button>
                ) : (
                    <Button size={'sm'} onClick={handleFollow}>Seguir</Button>
                )
            }
        </div>

    )
        ;
}