import { Button } from '@/components/ui/button'
import { NotificationPopover } from '@/components/ui/notification-popover'
import { Bell } from 'lucide-react'

export const Notifications = () => {
  return (
    <NotificationPopover buttonClassName={"bg-white rounded-full p-6"}/>
  )
}