import React from 'react'
import {Controller} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'

export default function RTE({name, lable, control, defaultValue="", placeholder, className}) {
  return (
    <div>
        {
            lable && <label>{lable}</label>
        }
        {/* jcmq1rv1df9hiflrnrgrb9kqyuef5n3mpoxn2og5jlj3m6ks */}
        <Controller
            name={name || 'content'}
            control={control}
            render={({field:{onChange}})=>(
                <Editor
                     apiKey='oe7m43wvszle0v6edlggi5tk8ns2oruch2hyqi3ecn4js26m'
                      initialValue={defaultValue}
                    init={{
                        placeholder:placeholder,
                        initialValue:defaultValue,
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }' + '@media(min-width: 1024px){body{ width:70%; margin-left:auto; margin-right:auto }}'
                    }}
                    onEditorChange={onChange}
                />
            )}
        />
    </div>
  )
}
