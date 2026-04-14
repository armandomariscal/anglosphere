export interface LocationProps {
    id: string;
    name: string;
    type: string;
    slug: string;
    parent: string | null;
    code?: string;
}

export class Location {
    constructor(private readonly props: LocationProps) {
        this.validate();
    }

    private validate(): void {
        if (!this.props.name) throw new Error("Location name is required");

        if (this.props.slug.includes(" ")) {
            throw new Error("Invalid slug format");
        }
    }

    get id(): string { return this.props.id; }
    get name(): string { return this.props.name; }
    
    isRoot(): boolean {
        return this.props.parent === null;
    }
}