import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
  } from "@/components/ui/avatar";

  import { Button } from "@/components/ui/button";

  import { Badge, badgeVariants } from "@/components/ui/badge";







export default function RecipeList({data}) {
    const {title,image,time,description,vegan}=data;
    
  return (
    <div>
        <Card className='flex flex-col justify-between'>
            <CardHeader className='flex-row gap-4 items-center '>
                <Avatar>
                  <AvatarImage src={`/img/${image}`} alt="recipe img" />
                  <AvatarFallback>
                    {title.slice(0,2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{time} mins to cook</CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <p>{description}</p>
            </CardContent>

            <CardFooter className='flex justify-between'>
                <Button >View Recipe</Button>
                {vegan && <Badge variant='secondary'>Vegan!</Badge> }
            </CardFooter>
          
        </Card>
      
    </div>
  )
}
