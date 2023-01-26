import { Height } from "@mui/icons-material"
import { Button, Grid, TextField } from "@mui/material"
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import dynamic from 'next/dynamic'
import { useState } from 'react'
import PreviewModal from "./Modals.js/imageModal";

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        // ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
]

const CreatePostForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()
    const [previewImg, setPreviewImg] = useState()

    const [isOpen, setIsOpen] = useState(false)

    const [content, setContent] = useState('')


    const handleSubmit = (saveType) => {
        if(title && description && image && content){
            console.log(saveType);
            console.log({
                title, description, image, content
            });
        }
    }

    // const createMarkup = () => {
    //     return { __html: content }
    // }

    return (
        <Grid alignItems="center" align="center" justify="center">
            <Grid spacing={2} container>
                <Grid item xs={12}>
                    <TextField label="Blog Title" fullWidth onChange={(e) => setTitle(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Short Description" fullWidth onChange={(e) => setDescription(e.target.value)} />
                </Grid>
                <Grid item xs={12}>

                    <Button variant="contained" component="label" style={{ width: previewImg ? "80%" : "100%", float: "left" }}>

                        <PhotoCamera />    &nbsp;   &nbsp; Upload Thumnail
                        <input hidden accept="image/*" multiple type="file" onChange={(e) => {
                            setImage(e.target.files[0])
                            setPreviewImg(URL.createObjectURL(e.target.files[0]))
                        }} />
                    </Button>
                    {
                        previewImg &&
                        <Button style={{ width: "15%", float: "left" }} onClick={() => setIsOpen(true)}>Preview</Button>
                    }
                </Grid>

            </Grid>
            <QuillNoSSRWrapper style={{ marginTop: "20px" }} placeholder="Write Article Here..." modules={modules} defaultValue={content} formats={formats} onChange={newContent => setContent(newContent)} theme="snow" />


            {/* <div style={{ width: "100%" }}>
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div>

            <div style={{ width: "100%" }}>
                {
                    content
                }
            </div> */}

            <div style={{ float: "right", marginTop: "20px" }}>
                <Button style={{ margin: "20px" }} onClick={() => handleSubmit("saveasdraft")}>Save as Draft</Button>
                <Button onClick={() => handleSubmit("saveandpublish")}>Save and Publish</Button>
            </div>
            <PreviewModal
                open={isOpen}
                setIsOpen={setIsOpen}
                image={previewImg}
            />
        </Grid>
    )
}


export default CreatePostForm
