const http=require('http')
const express=require('express')
const mongoose=require('mongoose')

let app=express();

const ImageSchema = new mongoose.Schema({ data: String });

const Info = mongoose.model("csvdatas", DataSchema);