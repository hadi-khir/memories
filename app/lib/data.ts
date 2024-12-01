import { unstable_noStore as noStore } from 'next/cache';
import { supabase } from "@/utils/client";

export async function fetchPhotos() {

    noStore();

    try {

        console.log('Fetching photos data...');
        const photos = await supabase.from('photos').select();

        return photos.data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch photo data.');
    }
}