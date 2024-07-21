"use client";


import Navbar from "@/components/NavBar";
import Button from '@mui/material/Button';




export default function Page() {
    return (
        <>
            <Navbar />

            <Button
            onClick={() => console.log("Clicked!")}
            
            >




                Connect Your Friend Device
            </Button>
            {/* <Button
                
                onClick={() => { console.log("clicked") }}

                color='success'

                sx={{ color: 'white', marginRight: '20px', backgroundColor: 'success.main', borderRadius: '25px', padding: '10px 30px', display: { xs: 'none', sm: 'inline-block' } }}
            >
                Connect your Friend Device
            </Button> */}
        </>

    )

}