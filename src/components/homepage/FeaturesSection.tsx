import useInViewHook from "@/hooks/useInView";
import {
    Timeline,
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import {
    ANALYTICS_AND_REPORTING,
    INVENTORY_MANAGEMENT,
    TAX_AND_BILLING_SYSTEM,
} from "../../../public/images/index";

const FeaturesSection: React.FC = () => {
    const inventoryManagementRef = useInViewHook();
    const analyticsAndReportingRef = useInViewHook();
    const taxAndBillingSystemRef = useInViewHook();

    const leftVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="w-full mt-10 flex flex-col gap-1 sm:gap-8">
            {/* Inventory Management */}
            <div className="w-full flex items-center flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 h-[200px] sm:h-[400px] flex items-center justify-center">
                    <Image
                        src={INVENTORY_MANAGEMENT}
                        className="bg-white w-1/2 sm:w-4/5 h-4/5 object-contain"
                        alt="Inventory Management"
                    />
                </div>
                <div className="w-4/5 sm:w-[32rem] flex items-center justify-center">
                    <Timeline className="font-semibold text-blue-gray-900">
                        <TimelineItem>
                            <TimelineConnector />
                            <p className="text-2xl sm:text-3xl">
                                Inventory Management
                            </p>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    Product Management
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    Quantity Management
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    Warehouse Management
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    Manufacturing Management
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="sm:pb-8"></TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
            {/* Analytics and Reporting */}
            <div className="w-full flex flex-col items-center sm:flex-row-reverse">
                <div className="w-full sm:w-1/2 h-[200px] sm:h-[400px] flex items-center justify-center">
                    <Image
                        src={ANALYTICS_AND_REPORTING}
                        className="bg-white w-4/5 h-4/5 object-contain"
                        alt=""
                    />
                </div>
                <div className="w-4/5 sm:w-[32rem] flex items-center justify-center">
                    <Timeline className="font-semibold text-blue-gray-900">
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <p className="text-2xl sm:text-3xl">
                                    Analytics and Reporting
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    Sales Report
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    Purchase Report
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    User-Friendly Dashboard
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    Stock Report
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="sm:pb-8"></TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
            {/* Tax and Billing System */}
            <div className="w-full flex flex-col items-center sm:flex-row">
                <div className="w-full sm:w-1/2 h-[200px] sm:h-[400px] flex items-center justify-center">
                    <Image
                        src={TAX_AND_BILLING_SYSTEM}
                        className="bg-white w-4/5 h-4/5 object-contain"
                        alt=""
                    />
                </div>
                <div className="w-4/5 sm:w-[32rem] flex items-center justify-center">
                    <Timeline className="font-semibold text-blue-gray-900">
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <p className="text-2xl sm:text-3xl">
                                    Tax and Billing System
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    Purchase Billing
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    Tax Report
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    Labelled Invoices
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="pb-8"></TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <p className="text-lg sm:text-2xl">
                                    Cloud based Invoice Database
                                </p>
                            </TimelineHeader>
                            <TimelineBody className="sm:pb-8"></TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
