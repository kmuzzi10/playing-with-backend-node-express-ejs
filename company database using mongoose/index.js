import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/companyDB")

const deptSchema = mongoose.Schema({
    name:String,
    deptno:Number
});

const companySchema = mongoose.Schema({
    ename:String,
    sal:Number,
    department:deptSchema
});



const emp =mongoose.model("employee",companySchema);
const dept = mongoose.model("department",deptSchema);


const cutting = {
    name:"cutting",
    deptno:1
};
const sampleRoom = {
    name:"sample room",
    deptno:2
};
const stitching = {
    name:"stitching",
    deptno:3
}

await dept.insertMany([cutting,sampleRoom,stitching]);



const rashid = {
    ename:"rashid",
    sal:80000,
    department:cutting
};
const mohsin = {
    ename:"mohsin",
    sal:42000,
    department:sampleRoom
};
const mushtaq = {
    ename:"mushtaq",
    sal:50000,
    department:stitching
};




const iqbal = new emp( {
    ename:"iqbal",
    sal:40000,
    department:sampleRoom     //insertone
})

// iqbal.save()



// await emp.insertMany([rashid,mohsin,mushtaq]);           //insert many

// await emp.updateOne({ename:"mushtaq"},{sal:40000});         //update


// const banday = await emp.find({}).exec()
// banday.forEach(element => {
//     console.log(element.ename)                            //find
// });

mongoose.connection.close()