import { caller } from "@/server/caller";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function StudentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const userStatus = await caller.user.exists();

	if (userStatus !== "user") redirect("/");

	return <>{children}</>;
}
