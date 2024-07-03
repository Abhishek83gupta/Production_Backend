import mongoose, { Schema } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"


const videoschema = new Schema(
    {
        videoFile:{
            type:String,   // Cloudinary url
            required:True      
        },

        thumbnail:{              
            type:String,   // Cloudinary url
            required:true
        },

        title : {
            type:String,   
            required:true
        },

        description:{
            type:String,
            required:true
        },

        duration:{
            type:String,  // Cloudinary url
            required:true
        },

        views:{
            type:Number,
            default:0
        },
 
        isPublised:{
            type:Boolean,
            default:true
        },

        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

    },
    {
       timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)