


import { site,API_URL } from "../../../config/index";
import { headers } from 'next/headers'
import Cookies from "js-cookie";
import Home from "@/app/components/Home";


export default async function Verify({params}) {
  const { adminId, posterId, verifyId } = params;
  console.log(adminId,posterId,verifyId)
  useEffect(() => {
    Cookies.set("adminId", adminId);
    Cookies.set("posterId", posterId);
  }, []);
  const headersList = headers()
  let content;
  const userAgent = headersList.get("user-agent")
  console.log(userAgent)
  const isMobileView = userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const isTabletView = userAgent.match(
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i
  );

  const device = isMobileView ? "phone" : isTabletView ? "ipad" : "desktop";

  const url = `${API_URL}/${site}/${adminId}/${posterId}/${verifyId}/${device}`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
  if (data?.success !== "exists") {
    
      content= <div className="col-span-12">No Page found!!</div>
    
  }
  if (data?.success == "exists") {
    // content= <div className="col-span-12">Page found!!</div>
    
      content= <Home adminId={adminId} posterId={posterId }/>
    
  }
  return (
    <div>
     {content}
    </div>
  )
}
