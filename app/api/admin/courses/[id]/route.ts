import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  return NextResponse.json({ ok: true, id: params.id, updated: body });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ ok: true, id: params.id, deleted: true });
}
