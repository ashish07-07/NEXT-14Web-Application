import { getServerSession } from "next-auth";
import { Appbar } from "@/components/Appbar";
export default async function User() {
  const session = await getServerSession();

  return (
    <div>
      Hi users detail
      <Appbar></Appbar>
      Han ji everything is ok
      {JSON.stringify(session)}
    </div>
  );
}
