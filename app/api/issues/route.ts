import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const CreateIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = CreateIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: body,
  });

  return NextResponse.json(newIssue, { status: 201 });
}
