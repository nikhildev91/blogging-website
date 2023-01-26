import { Box } from "@mui/system"
import CreatePostForm from "../components.js/createPostForm"
import SideBar, { DrawerHeader } from "../components.js/sidebar"

const CreatePost = () => {
    return (

        <Box sx={{ display: 'flex' }}>
            <SideBar header="Create New Post" />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <div style={{ display: "flex", justifyContent: "center", align : "center", alignItems : "center"}}>
                    <div style={{ width: "80%" }}>
                        <CreatePostForm />
                    </div>
                </div>
            </Box>
        </Box>
    )
}


export default CreatePost