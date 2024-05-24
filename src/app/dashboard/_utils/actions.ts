"use server"

import { GetProfileData } from "@/app/auth/_utils/actions";
import { cookies } from "next/headers";

const BASEURL = process.env.BASEURL;


export const CreateStory = async (data: { title: string, raw_content: string }) => {
    try {
        const TOKEN = cookies().get("accessToken")?.value;

        const response = await fetch(`${BASEURL}/contents/personal_stories/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${TOKEN}`
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        if (result.id) {
            return {
                success: true,
                message: "Story Created Successfully"
            }
        } else {
            return {
                success: false,
                message: "Story couldn't create!"
            }
        }

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}

export const GetUserStories = async () => {
    try {
        const TOKEN = cookies().get("accessToken")?.value;

        const userDataResponse = await GetProfileData();
        const userId = userDataResponse.user.id || 1;


        const response = await fetch(`${BASEURL}/contents/personal_stories/user/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${TOKEN}`
            }
        })
        const result = await response.json();
        console.log(result)
        return result;

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}