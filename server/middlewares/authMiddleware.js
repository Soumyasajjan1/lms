import { clerkClient } from "@clerk/express";

//middleware (protect educator routes)
export const protectEducator = async(req, res, next)=>{
    try {
        const userId = req.auth.userId
        const respnose = await clerkClient.users.getUser(userId)

        if(respnose.publicMetadata.role !== 'educator'){
            return res.json({success: false, message: "Unauthorized Access"})
        }

        next()

    } catch (error) {
        res.json({success:false, message: error.message})
    }
}