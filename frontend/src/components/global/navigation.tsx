"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { correctPageSlug } from "@/lib/storyblok/wrapper"

import { CrumpledPaperIcon } from "@radix-ui/react-icons"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


export type NavigationMenuProperties = {
  trigger: string,
  title: string,
  description: string,
  href: Href,
  primaryLinks: NavigationLink[],
  secondaryItems: NavigationItem[],
}

export type NavigationItem = {
  Trigger: string,
  Content: NavigationLink[],
}

export type NavigationLink = {
  Title: string,
  Description: string,
  href: Href,
}


export function CustomNavigationMenu(props: NavigationMenuProperties) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{props.trigger}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <CrumpledPaperIcon className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {props.title}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {props.description}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>


              {props.primaryLinks.map((link) => (
                <ListItem
                  key={link.Title}
                  title={link.Title}
                  href={correctPageSlug(link.href.cached_url)}
                >
                  {link.Description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        
        {props.secondaryItems.map((item) => (
          <NavigationMenuItem>
            <NavigationMenuTrigger>{item.Trigger}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {item.Content.map((link) => (
                  <ListItem
                    key={link.Title}
                    title={link.Title}
                    href={correctPageSlug(link.href.cached_url)}
                  >
                    {link.Description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"