import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { BriefcaseMedicalIcon, GaugeIcon } from "lucide-react";

export default function DoctorsDashboard() {
  return (
    <section className="container">
      <Tabs className="h-full" defaultValue="articles">
        <TabsList className="bg-gray-100 dark:bg-gray-800 px-6 py-2 border-b">
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="diet-plan">Diet Plan</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent className="pt-10 h-full overflow-y-auto" value="articles">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>New Treatments for Chronic Pain</CardTitle>
                <CardDescription>
                  Explore the latest advancements in pain management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Chronic pain can be a debilitating condition, but new
                  treatments are offering hope. This article delves into the
                  latest research and therapies that are revolutionizing the way
                  we approach pain management.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  Improving Patient Outcomes with Telehealth
                </CardTitle>
                <CardDescription>
                  Discover how virtual care is transforming healthcare.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The COVID-19 pandemic has accelerated the adoption of
                  telehealth, and the benefits are becoming increasingly clear.
                  This article explores how virtual care can enhance patient
                  outcomes and improve access to healthcare.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Advances in Diagnostic Imaging</CardTitle>
                <CardDescription>
                  Learn about the latest imaging technologies and their impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Diagnostic imaging plays a crucial role in modern medicine,
                  and new technologies are continuously pushing the boundaries
                  of what&apos;s possible. This article delves into the latest
                  advancements in imaging and how they are transforming patient
                  care.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent className="p-6 h-full overflow-y-auto" value="diet-plan">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Create a New Diet Plan</CardTitle>
                <CardDescription>
                  Customize a diet plan for your patient&apos;s needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="patient-name">Patient Name</Label>
                    <Input id="patient-name" placeholder="Enter patient name" />
                  </div>
                  <div>
                    <Label htmlFor="diet-type">Diet Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select diet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low-carb">Low-Carb</SelectItem>
                        <SelectItem value="mediterranean">
                          Mediterranean
                        </SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="paleo">Paleo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="diet-duration">Diet Duration</Label>
                    <Input
                      id="diet-duration"
                      placeholder="Enter duration in weeks"
                      type="number"
                    />
                  </div>
                  <Button type="submit">Create Diet Plan</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Manage Diet Plans</CardTitle>
                <CardDescription>
                  View and edit existing diet plans for your patients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient</TableHead>
                      <TableHead>Diet Type</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>Low-Carb</TableCell>
                      <TableCell>12 weeks</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="destructive">
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>Mediterranean</TableCell>
                      <TableCell>8 weeks</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="destructive">
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Michael Johnson</TableCell>
                      <TableCell>Vegetarian</TableCell>
                      <TableCell>10 weeks</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="destructive">
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent className="p-6 h-full overflow-y-auto" value="settings">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account information and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input defaultValue="Dr. Jane Doe" id="name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      defaultValue="jane.doe@example.com"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button type="submit">Save Changes</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dashboard Customization</CardTitle>
                <CardDescription>
                  Customize the appearance and layout of your dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="theme">Theme</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="layout">Layout</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select layout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compact">Compact</SelectItem>
                        <SelectItem value="spacious">Spacious</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit">Save Settings</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
