"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const BASEURL = process.env.BASEURL;



export const Register = async (data: { email: string, password: string, username: string }) => {
    try {
        console.log(BASEURL)
        const response = await fetch(`${BASEURL}/auth/users/?format=json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        if (result.id) {
            return {
                success: true,
                message: "Registration successful",
                data: result
            }
        }
        return {
            success: false,
            message: "Registration unsuccessful",
            data: result
        };
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "Something went wrong!"
        }
    }
}

export const LoginAction = async (data: { username: string, password: string }) => {
    try {
        const COOKIES = cookies();
        const response = await fetch(`${BASEURL}/auth/jwt/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();
        if (result.access) {
            COOKIES.set("accessToken", result.access);
            COOKIES.set("userdata", JSON.stringify(result))
            redirect("/dashboard")
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "Something went wrong!"
        }
    }
}
export const GetProfileData = async (TOKEN: string) => {
    try {
        const response = await fetch(`${BASEURL}/community/audience/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "JWT " + TOKEN
            },
            cache: "no-store"
            // body: JSON.stringify(data)
        })
        const result = await response.json();
        console.log(result)
        return result;

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!"
        }
    }
}

export const LogoutAction = async () => {
    try {
        const COOKIES = cookies();
        COOKIES.delete("accessToken");
        COOKIES.delete("userdata");
        // redirect("/auth/login")
        return {
            success: true,
            message: "Logged out successfully!"
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!"
        }
    }
};



export const DoctorRegister = async (data: any) => {
    try {
        const TOKEN = cookies().get("accessToken");
        console.log(TOKEN)
        const response = await fetch(`${BASEURL}/community/doctors?format=json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "JWT " + TOKEN?.value
            },
            body: JSON.stringify(data)
        })

        console.log(response)
        const result = await response.json();
        if (result.id) {
            return {
                success: true,
                message: "Registration successful",
                data: result
            }
        }
        return {
            success: false,
            message: "Registration unsuccessful",
            data: result
        };
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "Something went wrong!"
        }
    }
}