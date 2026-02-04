import { NextResponse } from "next/server";

type RouteParams = Promise<{ id: string }>;

export async function PUT(req: Request, { params }: { params: RouteParams }) {
  const body = await req.json();
  const { id } = await params;
  return NextResponse.json({ ok: true, id, updated: body });
}

export async function DELETE(_: Request, { params }: { params: RouteParams }) {
  const { id } = await params;
  return NextResponse.json({ ok: true, id, deleted: true });
}
