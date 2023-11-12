import axios from "axios";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, topic, message } = await req.json();
    const url = process.env.WEBHOOK_URL;

    if (!url) {
      console.log("[CONTACT_POST] NO URL");
      throw Error();
    }

    const embedJson = {
      username: "Andeh UK | Contact",
      content: "<@957437570546012240>",
      embeds: [
        {
          title: "A contact request was submitted.",
          color: 16473951,
          fields: [
            {
              name: "Email Address",
              value: `\`${email}\``,
              inline: true,
            },
            {
              name: "Topic",
              value: `\`${topic}\``,
              inline: true,
            },
            {
              name: "\u200b",
              value: "\u200b",
              inline: true,
            },
            {
              name: "Message",
              value: `\`\`\`${message}\`\`\``,
              inline: true,
            },
          ],
          author: {
            name: name,
          },
        },
      ],
      attachments: [],
    };

    const response = await axios.post(url, embedJson);
    if (response.status.toString().startsWith("2")) {
      return NextResponse.json({ message: "Success!" }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: response.data },
        { status: response.status }
      );
    }
  } catch (error: any) {
    console.log("[CONTACT_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
