import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"

const registerUser = asyncHandler(async (req , res) => {
    res.status(500).json({
        message:"response is going"
    })

    const {fullName , username , email , password} = req.body;
    if(fullName=== ""){
        throw new ApiError(400 , "FullName is required");
    }

} )

export {registerUser}