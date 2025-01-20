"user client"
export default function Signup (){
return (<>
<div className="bg-gray-100 my-10 p-4 max-w-3xl mx-auto rounded-lg shadow-md">
        <div className=" bg-gray-100 max-w-[1320px] mx-auto">
          <h1 className="text-4xl text-center py-5 text-black">Sign Up</h1>
        </div>
        <form className="py-4 mt-4 border-t flex flex-col gap-5">
           

           <div className="flex flex-col w-96 mx-auto gap-2">
            <label className="text-xl text-purple-950" htmlFor="username">Username</label>
            <input className="rounded h-8 p-2 border-2  border-purple-500  placeholder-black" type="username" id="username" placeholder="Enter username" />
           </div>
           <div className="flex flex-col w-96 mx-auto gap-2">
            <label className="text-xl text-purple-950" htmlFor="email">Email</label>
            <input className="rounded h-8 p-2 border-2  border-purple-500  placeholder-black" type="email" id="email" placeholder="Enter Email" />
           </div>

           <div className="flex flex-col w-96 mx-auto gap-2">
            <label className="text-xl text-purple-950" htmlFor="number">Password</label>
            <input className="rounded h-8 p-2 text-purple-950 border-2 border-purple-500 placeholder-black" type="password" id="number" placeholder="Enter Password" />
           </div>


          

          

           <button className="bg-purple-700 w-96 text-white mx-auto my-5 p-3 txt-white font-bold"  type="login">login</button>
        </form>

</div>

</>);

}