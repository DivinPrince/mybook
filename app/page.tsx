import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Button variant="outline" size="icon">dp</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
    )
}
