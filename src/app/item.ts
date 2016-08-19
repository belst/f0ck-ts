export interface Item {
    id: number;
    src: string;
    dest: string;
    mime: string;
    size: number;
    checksum: string;
    username: string;
    userchannel: string;
    usernetwork: string;
    stamp: number;
    next?: number;
    prev?: number;
    first?: number;
    last?: number;
}
