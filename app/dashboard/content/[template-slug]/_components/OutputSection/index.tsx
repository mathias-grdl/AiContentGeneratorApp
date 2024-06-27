import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import React, { useRef } from "react";
require("@toast-ui/editor/dist/toastui-editor.css");
const { Editor } = require("@toast-ui/react-editor");

export default function OutputSection() {
	const editorRef: any = useRef();

	return (
		<div className="bg-white shadow-lg border rounded-lg">
			<div className="flex justify-between items-center p-5">
				<h2 className="font-medium text-lg">Your Result</h2>
				<Button className="flex gap-2 items-center">
					<Copy className="w-4 h-4" /> Copy
				</Button>
			</div>
			<Editor
				ref={editorRef}
				initialValue="result"
				initialEditType="markdown"
				height="600px"
				useCommandShortcut={true}
				onChange={() =>
					console.log(editorRef.current.getInstance().getMarkdown())
				}
			/>
		</div>
	);
}
