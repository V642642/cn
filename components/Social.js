import React from "react";

export default function Social() {
  return (
    <div className="flex bg-fixed bg-no-repeat bg-cover bg-[50%]  w-full gap-12 items-center bg-[url('../public/images/img-13.jpg')] py-20 justify-center flex-col border-t-8 min-h-[400px] border-green-500">
      <p className="text-[32px] font-bold font-primary text-gray-500 ">
        We are <span className="text-green-500 font-semibold">Social</span>
      </p>
      <div className="w-full flex items-center justify-center gap-4 flex-col md:flex-row">
        <iframe
          className="w-full md:w-4/12"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhiringplugofficial&amp;tabs=timeline&amp;width=540&amp;height=500&amp;small_header=true&amp;adapt_container_width=false&amp;hide_cover=true&amp;show_facepile=true&amp;appId"
          width="540"
          height="500"
        //   allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        <iframe
          id="twitter-widget-0"
          // frameborder="0"
          allowtransparency="true"
        //   allowfullscreen="true"
          className="w-full md:w-[30%] min-h-[500px]"
          title="Twitter Timeline"
          src="https://syndication.twitter.com/srv/timeline-profile/screen-name/hiringplug?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19idXNpbmVzc192ZXJpZmllZF9iYWRnZSI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmx1ZV92ZXJpZmllZF9iYWRnZSI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19nb3ZfdmVyaWZpZWRfYmFkZ2UiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYnVzaW5lc3NfYWZmaWxpYXRlX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideBorder=false&amp;hideFooter=true&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;maxHeight=500px&amp;origin=https%3A%2F%2Fwww.hiringplug.com%2F&amp;sessionId=cdc8104ba303cf076ab221c41d78e66134564bc6&amp;showHeader=true&amp;showReplies=false&amp;transparent=false&amp;widgetsVersion=aaf4084522e3a%3A1674595607486"
        ></iframe>
      </div>
    </div>
  );
}
