import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DialogDescription } from '@radix-ui/react-dialog';
import React from 'react'
interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any;
}
const PlayVideoModal = ({ changeState, overview, state,title,youtubeUrl}: iAppProps) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>wdw
        <DialogContent className='sm:max-w-[425]'>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{overview}</DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default PlayVideoModal