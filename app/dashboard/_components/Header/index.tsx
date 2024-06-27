import { Search } from "lucide-react";
import React from "react";

export default function Header() {
	return (
		<div className="p-5 shadow-sm border-b-2 bg-white flex justify-between items-center flex-col md:flex-row">
			<div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
				<Search />
				<input
					type="text"
					placeholder="Search..."
					className="outline-none"
				/>
			</div>
			<div>
				<h2 className="bg-primary p-1 rounded-full text-xs text-white px-2 whitespace-nowrap">
					Join Membership just for $9,99/Month
				</h2>
			</div>
		</div>
	);
}
