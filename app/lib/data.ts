import { unstable_noStore as noStore } from 'next/cache';
import { supabase } from "@/utils/client";
import { Tables } from '@/database.types';

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

export async function fetchPhotoById(id: number): Promise<Tables<'photos'> | null> {
    noStore();

    if (!id) {
        console.error('Missing ID for image lookup!');
        throw new Error('Failed to fetch photo data');
    }

    try {
        console.info('Fetching photo data for ID: ' + id);
        const photoResponse = await supabase
            .from('photos')
            .select('*')
            .eq('id', id)
            .single(); // Ensure only one row is returned

        return photoResponse.data;
    } catch (error) {
        console.error('Error while fetching photo', error);
        throw new Error('Failed to fetch photo data');
    }
}